import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { GET_MESSAGE_BY_EMAIL } from "../../lib/queries";
import trash from "../../assets/trash.png";
import { DEL_CR } from "../../lib/mutations";

const DmProfileBox = (props) => {
  var u = props.data;
  const email = localStorage.getItem("email");

  const {
    error: error2,
    loading: loading2,
    data: data2,
  } = useQuery(GET_MESSAGE_BY_EMAIL, {
    variables: {
      toEmail: email,
      fromEmail: u.recipientemail,
    },
  });

  const [delCr, { data: data4, loading: loading4 }] = useMutation(DEL_CR);

  const doDeleteRoom = () => {
    delCr({
      variables: {
        roomId: u.id,
      },
    })
      .then(({ data }) => {})
      .catch((e) => {
        console.log(e);
      });
  };

  if (loading2) return <div></div>;

  return (
    <div>
      <div
        className="dm-contact-each"
        onClick={() => props.changeRec(u.recipientemail)}
      >
        <img src={process.env.PUBLIC_URL + `${u.user.profile}`} />
        <div className="contact-name">
          <div>
            <b>{u.user.username}</b>
          </div>
          <div>{u.user.email}</div>
          <div className="grey">
            {data2.getMessageByToEmail != null
              ? data2.getMessageByToEmail[data2.getMessageByToEmail.length - 1]
                  .message
              : ""}
          </div>
        </div>
      </div>
      <div className="vv5678">
        <img src={trash} onClick={doDeleteRoom} />
      </div>
    </div>
  );
};

export default DmProfileBox;
