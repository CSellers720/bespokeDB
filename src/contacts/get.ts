import { DynamoDB } from 'aws-sdk'

const getContacts = async () => {
  return {
    statusCode: 500,
    body: 'inactive'
  }
  
  const dynamodb = new DynamoDB.DocumentClient()
  const params = {
    TableName: 'contacts',
  }

  const result = await dynamodb.scan(params).promise()
  const contacts = result.Items
  return {
    statusCode: 200,
    body: JSON.stringify(contacts)
  }
}

// const getContact = async () => {}

module.exports.getContacts = getContacts
