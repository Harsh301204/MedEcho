import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="flex justify-center p-10">
      <UserProfile routing="hash" />
    </div>
  );
}