import { useRouter } from "next/navigation";

export default function useViewModel() {
  const { push } = useRouter();

  const handleSignin = () => {
    push("/auth-routes/signin");
  };

  return { handleSignin };
}
