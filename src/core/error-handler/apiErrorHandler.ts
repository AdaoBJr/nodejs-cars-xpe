import { MonitoringTags } from 'core';
import { ApiError } from './api-error';
import { apiErrorsType } from './types/api-errors.type';

interface ApiErrorHandlerProps {
  error?: { statusCode: number; message: string };
  tag?: MonitoringTags;
  throwStatus?: number;
  messageCustom?: string;
}

export function apiErrorHandler({
  error,
  tag,
  throwStatus,
  messageCustom,
}: ApiErrorHandlerProps): ApiError {
  tag &&
    console.error(
      `ERRO: [ ${tag} ] - Status: ${error?.statusCode ?? throwStatus}, Message: ${
        error?.message ?? messageCustom
      }${(error as any)?.body && ', Body: ' + JSON.stringify((error as any)?.body)}`
    );

  return (
    apiErrorsType[error?.statusCode ?? throwStatus ?? 500]?.(messageCustom) ??
    new ApiError()
  );
}
