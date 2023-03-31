import { useParams } from "react-router-dom";

const data = {
    dongdong: {
        name: "동동",
        description: "리액트 해보고있는 개발자",
    },
    gyuongd: {
        name: "경디",
        description: "핵초짜",
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;
