echo 'Starting AWS [DEV] Deployment'

# variables
AWS_S3_BUCKET=brands-staging.migobucks.com

# Env Variables
export AWS_PROFILE=migo

echo 'Building Project'
yarn build
echo 'Build Success'

echo 'Emptying Bucket'
aws s3 rm s3://$AWS_S3_BUCKET --recursive

echo 'uploading to bucket'
aws s3 sync ./build s3://$AWS_S3_BUCKET

rm -rf ./build
echo 'Done'
