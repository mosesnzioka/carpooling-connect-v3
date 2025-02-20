import PersonalInformation from "../../components/myprofile/myprofile";
import EditPool from "../../components/updatepool/updatepool";
import Mainhomeheader from "../../components/mainHomeHeader/mainhomeheader";
import UpdatePassword from "../../components/password-update/updatepassword";

function MyProfile() {
  return (
    <div>
      <Mainhomeheader />
      <PersonalInformation />
      <EditPool/>
      <UpdatePassword/>
    </div>
  );
}
export default MyProfile;
