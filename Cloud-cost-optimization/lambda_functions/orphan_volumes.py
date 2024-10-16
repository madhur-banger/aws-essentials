import boto3

def lambda_handler(event, context):
    ec2 = boto3.client('ec2')
    # Fetch all volumes
    volumes_response = ec2.describe_volumes(Filters=[{'Name': 'status', 'Values': ['available']}])

    # Delete unattached volumes
    for volume in volumes_response['Volumes']:
        volume_id = volume['VolumeId']
        try:
            ec2.delete_volume(VolumeId=volume_id)
            print(f"Deleted unattached EBS volume {volume_id}.")
        except Exception as e:
            print(f"Failed to delete volume {volume_id}: {str(e)}")

