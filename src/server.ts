import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import userController from './controllers/UserController'

export class SetupServer extends Server {
  public constructor (private port = 3333) {
    super()
  }

  public init (): void {
    this.setupExpress()
    this.setupControllers()
    this.database()
    this.app.listen(this.port, () => {
      console.log('Server listening on port: ' + this.port)
    })
  }

  private setupExpress (): void {
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  private setupControllers (): void {
    this.addControllers([
      userController
    ])
  }

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}
