/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2022-11-07T20:11:84+01:00
 * @Copyright: Technology Studio
**/

import type { EmailOptions } from 'email-templates'

export interface AllEmailTemplates {

}

export type EmailTemplate = keyof AllEmailTemplates

export type EmailTemplateOptions = {
  [KEY in keyof AllEmailTemplates]: Omit<AllEmailTemplates[KEY], 'template'> & { template: KEY }
}[keyof AllEmailTemplates]

export type GetEmailTemplateOptions<EMAIL_TEMPLATE extends EmailTemplate> = AllEmailTemplates[EMAIL_TEMPLATE] extends EmailOptions ? AllEmailTemplates[EMAIL_TEMPLATE] : never
