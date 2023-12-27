import PopupLoginUI from "./index.presenter";
import { useForm } from "react-hook-form";
import { schema } from "../../../../commons/schema/createUset";
import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";

interface Iprops {
  popupActive: boolean;
  index: number;
  onClickPopup: (index: number) => () => void;
  setPopupActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFormData {
  email: string;
  password: string;
  name: string;
}

type FormValues = {
  email: string;
  password: string;
  name: string;
};

const CREATE_USER = gql`
  mutation ($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export default function PopupLogin(props: Iprops): JSX.Element {
  // 뮤테이션
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState, getValues } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 로그인,회원가입 유효성체크 함수
  const onClickCreateUser = async () => {
    const { email, password, name } = getValues();

    if (!email || !password || !name) {
      alert("빈칸이 있으면 안됩니다.");
      return;
      // 요청전송 안되도록 함수종료
    }

    if (email && password && name) {
      try {
        if (formState.errors.email) {
          alert(formState.errors.email?.message);
          return;
        }

        const result = await createUser({
          variables: {
            createUserInput: {
              email: email,
              password: password,
              name: name,
            },
          },
        });
        console.log(result);

        alert(
          "회원가입에 성공했습니다! " +
            "\n이메일 :" +
            email +
            "\n닉네임 :" +
            name +
            "\n좋은하루보내세요 !"
        );
      } catch (error) {
        alert(error?.message);
      }
    }
  };

  return (
    <PopupLoginUI
      index={props.index}
      popupActive={props.popupActive}
      onClickPopup={props.onClickPopup}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateUser={onClickCreateUser}
    />
  );
}
