import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  
  const botToken = '8554158243:AAEdtBPuRkz6kYIoy-C0RVYQXTdohoykt7k';
  const chatId = '649299577';

  if (req.url.includes('api.telegram.org')) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const modifiedReq = req.clone({ 
      url: url,
      body: {
        chat_id: chatId,
        ...(req.body as object)
      }
    });
    return next(modifiedReq);
  }
  return next(req);
};
