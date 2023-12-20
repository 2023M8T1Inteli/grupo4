// src/s3/s3.service.ts
import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { get } from 'http';

@Injectable()
export class S3Service {
	constructor() {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    // Restante do código do serviço...
  }
  private s3 = new AWS.S3();

  async uploadFile(file: Express.Multer.File, bucket: string) {
    const { originalname, buffer } = file;

    const uploadResult = await this.s3.upload({
      Bucket: bucket,
      Key: originalname,
      Body: buffer,
    }).promise();

    return this.getFileUrl(uploadResult.Key, bucket);
  }

  async getFileStream(bucket: string, key: string): Promise<AWS.S3.GetObjectOutput> {
    return this.s3.getObject({ Bucket: bucket, Key: key }).promise();
  }
  
	private getFileUrl(key: string, bucket: string): string {
    // Constrói o URL com base no bucket e na chave do arquivo
    return `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${encodeURIComponent(key)}`;
  }
}
