import mongoose from 'mongoose'
import consola from 'consola'
// import { logger } from '../utils/Logger'

const logger = consola.withTag('DB')

mongoose.connection.on('error', err => {
  logger.error('[DATABASE ERROR]:', err)
})
mongoose.connection.on('connection', () => {
  logger.log('DbConnection Successful')
})

mongoose.set('strictQuery', false)

export class DbConnection {
  static async connect(connectionstring = process.env.CONNECTION_STRING || '') {
    const status = 0
    try {
      if (!connectionstring) {
        return logger.warn('Db not available, no CONNECTION_STRING')
      }
      const status = await mongoose.connect(connectionstring)
      logger.log('[CONNECTION TO DB SUCCESSFUL]')
      return status
    } catch (e) {
      logger.error(
        '[MONGOOSE CONNECTION ERROR]:',
        'Invalid connection string'
      )
      return status
    }
  }
}
