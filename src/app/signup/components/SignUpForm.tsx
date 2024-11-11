import CustomInput from "@/components/common/CustomInput";
import {
  openNotificationFail,
  openNotificationSuccess,
} from "@/components/Notification";
import { useHandleRegisterMutation } from "@/redux/endpoints/auth";
import { Form, Button } from "antd";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [triggerRegister, { data, error, isLoading }] =
    useHandleRegisterMutation();
  const router = useRouter();

  const onFinish = async (values: any) => {
    const res = await triggerRegister({
      email: values.email,
      password: values.password,
    });
    if (res?.data?.status === "success") {
      openNotificationSuccess("회원가입이 완료되었습니다!");
      router.push("/login");
    } else {
      openNotificationFail((res?.error as any)?.data?.detail);
    }
  };

  return (
    <Form
      name="loginFrom"
      className="flex flex-1 flex-col items-center"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div className="flex flex-col flex-1">
        <Form.Item
          name="email"
          className="flex justify-center !mb-[15px]"
          rules={[
            { required: true, message: "이메일을 입력해주세요!" },
            { type: "email", message: "유효한 이메일 주소를 입력해주세요!" },
          ]}
        >
          <CustomInput placeholder="이메일" />
        </Form.Item>

        <Form.Item
          name="password"
          className="flex justify-center !mb-[15px]"
          rules={[{ required: true, message: "비밀번호를 입력해주세요!" }]}
        >
          <CustomInput type="password" placeholder="비밀번호" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          className="flex justify-center"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("비밀번호가 일치하지 않습니다!")
                );
              },
            }),
          ]}
        >
          <CustomInput type="password" placeholder="비밀번호 재입력" />
        </Form.Item>
      </div>

      <Form.Item>
        <Button
          disabled={isLoading}
          type="primary"
          className="!w-[250px] !h-[50px] !rounded-[10px]"
          htmlType="submit"
        >
          <span className="text-[#EAEAF0]">회원가입</span>
        </Button>
      </Form.Item>
      <Button
        disabled={isLoading}
        type="link"
        onClick={() => router.push("/login")}
      >
        <span className="font-medium text-sm">로그인</span>
      </Button>
    </Form>
  );
}
