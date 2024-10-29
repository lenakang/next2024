import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-4 py-6">
      <div className="my-auto flex flex-col items-center text-center gap-2">
        <span className="text-9xl">🥕</span>
        <h1 className="text-3xl font-bold tracking-tighter mt-3 mb-2">
          당신 근처의 당근
        </h1>
        <h2 className="text-md text-neutral-800">
          동네라서 가능한 모든 것<br /> 지금 내 동네를 선택하고 시작해보세요!
        </h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/createAccount"
          className="btn-primary h-12 font-bold text-lg"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span className="text-neutral-600">이미 계정이 있나요?</span>
          <Link href="/login" className="text-primary font-bold">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
