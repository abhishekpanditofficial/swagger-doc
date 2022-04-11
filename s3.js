const fs= require('fs');
const S3= require('aws-sdk/clients/s3');

const bucketName= 'book-image-bucket';
const region= 'ap-south-1';
const accessKeyId= 'AKIAZZ45N2AEZDKKOKXX';
const secretAccessKey= '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';


const s3= new S3({
    region,
    accessKeyId,
    secretAccessKey
})

 function uploadFile(file){
    const fileStream = fs.createReadStream(file.path);


    const uploadParams= {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()
}

exports.uploadFile= uploadFile;