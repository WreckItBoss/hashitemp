import { LoginSchema, LoginValue } from '@/types/form/login.types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useLoginPage = () => {
  const methods = useForm<LoginValue>({
    resolver: zodResolver(LoginSchema),
  });

  return {
    methods,
  };
};
