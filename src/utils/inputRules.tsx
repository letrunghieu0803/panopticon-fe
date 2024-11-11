/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Rule } from 'antd/lib/form';

type RuleFields = 'email' | 'password' | 'confirmPassword';
export const inputRules: Record<RuleFields, Rule[]> = {
  email: [
    {
      required: true,
      message: '이메일을 입력해 주세요',
    },
    {
      type: 'email',
      message: '올바른 이메일 형식을 입력하세요',
    },
  ],

  password: [
    () => ({
      validator(_, value) {
        const passwordRegex =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const validatePassword = passwordRegex.test(value);
        if (!value || value.length === 0) {
          return Promise.reject(new Error('비밀번호를 입력해주세요.'));
        }
        if (!validatePassword) {
          return Promise.reject(
            new Error('영문, 숫자, 특수문자 조합 8자리 이상 입력해주세요.'),
          );
        }
        return Promise.resolve();
      },
    }),
  ],

  confirmPassword: [
    ({ getFieldValue }) => ({
      validator(_: any, value: string) {
        if (!value || value.length === 0) {
          return Promise.reject(new Error('비밀번호를 한번 더 입력해주세요​.'));
        }
        if (getFieldValue('password') !== value) {
          return Promise.reject(
            new Error('The new password that you entered do not match!'),
          );
        }
        return Promise.resolve();
      },
    }),
  ],
};
