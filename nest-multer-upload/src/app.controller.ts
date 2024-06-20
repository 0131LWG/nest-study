import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  UploadedFiles,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
  AnyFilesInterceptor,
} from '@nestjs/platform-express';
import { storage } from './upload-storage';
import { FileSizeValidationPipePipe } from './file-size-validation-pipe.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * @Author GUAN
   * @Desc 单文件上传
   */
  @Post('aaa')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFile(
    @UploadedFile(FileSizeValidationPipePipe) file: Express.Multer.File,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('file', file);
  }

  /**
   * @Author GUAN
   * @Desc 多文件上传
   */
  @Post('bbb')
  @UseInterceptors(
    FilesInterceptor('bbb', 3, {
      dest: 'uploads',
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('🚀 ~ AppController ~ uploadFiles ~ body:', body);
    console.log('files', files);
  }

  /**
   * @Author GUAN
   * @Desc 多字段文件上传
   */
  @Post('ccc')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'aaa', maxCount: 3 },
        { name: 'bbb', maxCount: 2 },
      ],
      {
        dest: 'uploads',
      },
    ),
  )
  uploadFilesFields(
    @UploadedFiles()
    files: {
      aaa?: Array<Express.Multer.File>;
      bbb?: Array<Express.Multer.File>;
    },
    @Body() body,
  ) {
    console.log('🚀 ~ AppController ~ uploadFiles ~ body:', body);
    console.log('files', files);
  }

  /**
   * @Author GUAN
   * @Desc 多字段并且不确定字段文件上传
   */
  @Post('ddd')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: storage,
    }),
  )
  uploadAnyFiles(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('🚀 ~ AppController ~ uploadFiles ~ body:', body);
    console.log('files', files);
  }
}
