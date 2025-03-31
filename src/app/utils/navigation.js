import { useRouter } from "next/navigation";

// This is a hook-based helper
export function useNavigate() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return navigate;
}
