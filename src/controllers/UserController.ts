import { Request, Response } from 'express'
import { Controller, Get, Post } from '@overnightjs/core'

import User from '../schemas/User'

@Controller('users')
class UserController {
  @Get('')
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  @Post('')
  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }
}

export default new UserController()
