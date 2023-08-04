import "../../../style/others/membershipOnly/MembershipOnly.css";
import MembershipContent from "../membershipOnly/MembershipContent"


const MembershipOnly = () => {
    // 해당 컴포넌트가 서버에서 보여줄 영상을 불러와서
    // 하위 컴포넌트 카드에게 보내기

    // 임시로 해당 컴포넌트에서 가상으로 설정
    const files = [
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.17 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.18 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.20 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.21 부밀리가 떴다"
        },
        {
            title : "[GOING SEVENTEEN]",
            subtitle : "EP.23 부밀리가 떴다"
        }
    ]
        
    

    return (
        <div className="container">
        <div className="membershipOnlyContainer">
            {files.map((file, i) => (
            <MembershipContent key={i} title={file.title} subtitle={file.subtitle} />
            ))}
        </div>
        </div>
    )
}

export default MembershipOnly