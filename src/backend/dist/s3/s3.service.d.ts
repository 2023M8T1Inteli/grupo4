/// <reference types="multer" />
export declare class S3Service {
    constructor();
    private s3;
    uploadFile(file: Express.Multer.File, bucket: string): Promise<string>;
    private getFileUrl;
}
