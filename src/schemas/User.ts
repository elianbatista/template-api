import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document { // Criação de uma Typescript Interface para o Schema
  email?: string
  firstName?: string
  lastName?: string
  fullName(): string
}

const UserSchema = new Schema({ // Criação do Schema
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string { // Exemplo de Método dentro do Schema
  return this.firstName + ' ' + this.lastName
}

export default model<UserInterface>('User', UserSchema)
