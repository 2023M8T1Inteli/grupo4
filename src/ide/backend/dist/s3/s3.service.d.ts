/// <reference types="multer" />
import * as AWS from 'aws-sdk';
export declare class S3Service {
    constructor();
    private s3;
    uploadFile(file: Express.Multer.File, bucket: string): Promise<string>;
    getFileStream(bucket: string, key: string): Promise<AWS.S3.GetObjectOutput>;
    private getFileUrl;
}
