/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-04-05T14:04:11+02:00
 * @Copyright: Technology Studio
**/

import { ConfigManager } from '@txo/config-manager'

export type Config = {
  awsSesRegion: string,
  awsSmtpUsername: string,
  awsSmtpPassword: string,
  defaultEmailAddressFrom: string,
}

export const configManager: ConfigManager<Config> = new ConfigManager<Config>({})
