import type { I18n } from '@payloadcms/translations'
import type { SanitizedConfig } from 'payload/types'

import { meta } from '../../utilities/meta.js'

export const generateNotFoundMeta = ({ config, i18n }: { config: SanitizedConfig; i18n: I18n }) => {
  return meta({
    config,
    description: i18n.t('general:pageNotFound'),
    keywords: `404 ${i18n.t('general:notFound')}`,
    title: i18n.t('general:notFound'),
  })
}