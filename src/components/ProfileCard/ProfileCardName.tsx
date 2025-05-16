const ProfileCardName = () => {
  return (
    <div className="grid grid-cols-[70px_1fr] gap-5">
      <img
        className="w-[70px] h-[70px] rounded-[50%]"
        src="https://avatars.githubusercontent.com/u/1"
        alt="avatar-image"
      />
      <div className="flex flex-col gap-2">
        <strong>John Doe</strong>
        <span>@john-Doe</span>
      </div>
    </div>
  );
};

export default ProfileCardName;
