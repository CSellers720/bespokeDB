import { DynamoDB } from 'aws-sdk'
import { v4 } from 'uuid'
import { SlsMsg, NewContactItem } from './Interfaces'

// TODO: Fix type validation.

const addContact = async (event: SlsMsg): Promise<SlsMsg>  => {
  return {
    statusCode: 500,
    body: 'inactive'
  }

  const { contact } = JSON.parse(event.body)
  const createdAt = new Date().toUTCString()
  const id: string = v4()
  const dynamodb = new DynamoDB.DocumentClient()
  const newContact: NewContactItem = { id, contact, createdAt }

  await dynamodb.put({
    TableName: 'contacts',
    Item: newContact
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(newContact)
  }
}

module.exports.addContact = addContact
