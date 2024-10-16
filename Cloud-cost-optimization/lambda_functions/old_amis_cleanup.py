import boto3

def lambda_handler(event, context):
    ec2 = boto3.client('ec2')
    # Fetch all AMIs owned by the user
    images_response = ec2.describe_images(Owners=['self'])

    # Fetch all instances to find the AMIs in use
    instances_response = ec2.describe_instances()
    used_amis = set()

    for reservation in instances_response['Reservations']:
        for instance in reservation['Instances']:
            used_amis.add(instance['ImageId'])

    # Delete unused AMIs
    for image in images_response['Images']:
        ami_id = image['ImageId']
        if ami_id not in used_amis:
            try:
                ec2.deregister_image(ImageId=ami_id)
                print(f"Deregistered AMI {ami_id} as it is not in use.")
            except Exception as e:
                print(f"Failed to deregister AMI {ami_id}: {str(e)}")

