import CustomInput from "@/components/common/CustomInput";
import {
  openNotificationFail
} from "@/components/Notification";
import { useHandleLoginMutation } from "@/redux/endpoints/auth";
import { useAppDispatch } from "@/redux/hooks";
import {
  updateAccessToken,
  updateRefreshToken,
} from "@/redux/slices/auth.slide";
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [triggerLogin, { error }] = useHandleLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  console.log("triggerLogin", error);
  const onFinish = async (values: any) => {
    const res = await triggerLogin({
      username: values.email,
      password: values.password,
    });

    if (res?.data?.status === "success") {
      dispatch(updateAccessToken(res?.data?.access_token));
      dispatch(updateRefreshToken(res?.data?.refresh_token));
      window.localStorage.setItem("accessToken", res?.data?.access_token);
      window.localStorage.setItem("refreshToken", res?.data?.refresh_token);
      router.push("/profile");
    } else {
      openNotificationFail((res?.error as any)?.data?.detail);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="loginFrom"
      className="flex flex-1 flex-col items-center"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
        {(error as any)?.data?.detail && (
          <p className="text-red-600">{(error as any)?.data?.detail}</p>
        )}
      </div>

      <Form.Item>
        <Button
          type="primary"
          className="!w-[250px] !h-[50px] !rounded-[10px]"
          htmlType="submit"
        >
          <span className="text-[#EAEAF0]">로그인</span>
        </Button>
      </Form.Item>
      <Button type="link" onClick={() => router.push("/signup")}>
        <span className="font-medium text-sm">회원가입</span>
      </Button>
    </Form>
  );
}
