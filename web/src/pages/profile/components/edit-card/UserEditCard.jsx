import React from "react";
import EditContentCard from "./edit-card";
import EditContainer from "./edit-container";
import EditTitle from "./edit-title";
import EditForm from "../../../../components/forms/profile-forms/edit-form";
import EditPassword from "../../../../components/forms/profile-forms/edit-password";

const UserEditCard = () => {
  return (
    <React.Fragment>
      {/*----------------------User Edit Container------------------- */}

      <EditContainer>
        {/*----------------------User Edit Title------------------- */}

        <EditTitle title="Özel Personel Bilgiler" />

        {/*----------------------User Edit card------------------- */}

        <EditContentCard>
          <EditForm />
        </EditContentCard>

        {/*----------------------Edit Password Card------------------- */}

        <EditPassword />
      </EditContainer>
    </React.Fragment>
  );
};

export default UserEditCard;
