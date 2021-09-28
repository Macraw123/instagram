import React, { useEffect, useState } from "react";
import sampleProfile from "../../assets/profile1.png";
import send from "../../assets/send.png";
import attach from "../../assets/attached.png";

import "./DMPage.scss";
import {
  FIND_USERS,
  GET_FOLLOWINGS,
  GET_MESSAGE_BY_EMAIL,
  MY_CHATS,
} from "../../lib/queries";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { SEND_MESSAGE } from "../../lib/mutations";
import DmProfileBox from "../../components/DmProfileBox/DmProfileBox";
import SendBox from "../../components/SendBox/SendBox";
import ProfileBoxA from "../../components/ProfileBoxA/ProfileBoxA";
import Layout from "../../components/layout/Layout";

function DMPage() {
  var [uploaded, setUploaded] = useState("");
  const email = localStorage.getItem("email");
  const [msg, setMsg] = useState("");
  const [inputuname, setInputuname] = useState("");
  const [recipient, setRecipient] = useState("rajit@ymail.com");
  const [dispNew, setDispNew] = useState("hidden");

  const {
    error: error2,
    loading: loading2,
    data: data2,
  } = useQuery(GET_MESSAGE_BY_EMAIL, {
    variables: {
      toEmail: email,
      fromEmail: recipient,
    },
    pollInterval: 900,
  });

  const {
    error: error3,
    loading: loading3,
    data: chatroomdata,
  } = useQuery(MY_CHATS, {
    variables: {
      email: email,
    },
    pollInterval: 1000,
  });

  const {
    error: error5,
    loading: loading5,
    data: data5,
  } = useQuery(GET_FOLLOWINGS, {
    variables: {
      email: email,
    },
  });

  const [ok, { error: error6, loading: loading6, data: data6 }] = useLazyQuery(
    FIND_USERS,
    {
      variables: {
        username: inputuname,
      },
    }
  );

  useEffect(() => {
    ok({ variables: { username: inputuname } });
  }, [inputuname]);

  const handleChange = (e) => {
    setUploaded(`${e.target.files[0].name}`);
  };

  var currentdate = new Date();
  var min = ("0" + currentdate.getMinutes()).slice(-2);
  var sec = ("0" + currentdate.getSeconds()).slice(-2);
  var datetime =
    currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getDate() +
    " " +
    currentdate.getHours() +
    ":" +
    min +
    ":" +
    sec;

  const [
    createMessage,
    { data: data4, loading: loading4, error: errorCreate4 },
  ] = useMutation(SEND_MESSAGE);

  const submit = () => {
    if (msg == "" && uploaded == "") {
      return;
    }
    if (uploaded.includes(".mp4")) {
      createMessage({
        variables: {
          toemail: recipient,
          fromemail: email,
          created: datetime,
          message: msg,
          image: "",
          video: uploaded,
        },
      })
        .then(({ data }) => {
          setMsg("");
        })
        .catch((e) => {});
    } else {
      createMessage({
        variables: {
          toemail: recipient,
          fromemail: email,
          created: datetime,
          message: msg,
          image: uploaded,
          video: "",
        },
      })
        .then(({ data }) => {
          setMsg("");
        })
        .catch((e) => {});
    }
    setUploaded("");
  };

  const toggle = () => {
    if (dispNew == "hidden") {
      setDispNew("show");
    } else {
      setDispNew("hidden");
    }
  };

  if (loading2) return <div></div>;
  if (loading5) return <div></div>;
  if (loading3) return <div></div>;

  return (
    <Layout header>
      <div className="dm-main-box dm-ipad">
        <div className="dm-list">
          <div className="dm-messaging-header">
            <div>
              <b>{email}</b>
            </div>
            <div onClick={toggle} className="c-pointer">
              New Messages
            </div>
          </div>
          <div className="dm-contact-list">
            {chatroomdata.getMyChats ? (
              chatroomdata.getMyChats.map((u) => (
                <div>
                  {recipient == u.recipientemail ? (
                    <div className="chosen-one c-pointer">
                      <DmProfileBox
                        data={u}
                        changeRec={(rec) => setRecipient(rec)}
                      />
                    </div>
                  ) : (
                    <div className="c-pointer">
                      <DmProfileBox
                        data={u}
                        changeRec={(rec) => setRecipient(rec)}
                      />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>
                <br />
                "Start making chats now"
              </div>
            )}
          </div>
        </div>

        <div className="dm-messaging">
          <div className="dm-messaging-header">
            <b>{recipient}</b>
          </div>
          <div className="dm-chat-box">
            <div className="time">
              <span>Today</span>
            </div>
            {data2.getMessageByToEmail
              ? data2.getMessageByToEmail.map((m) =>
                  m.fromemail === email ? (
                    <SendBox m={m} />
                  ) : (
                    <div className="message sag">
                      <div
                        className="messageText"
                        data-time={
                          new Date(m.created).getHours() +
                          ":" +
                          (new Date(m.created).getMinutes() < 10 ? "0" : "") +
                          new Date(m.created).getMinutes()
                        }
                      >
                        <div>{m.image != "" ? <img src={m.image} /> : ""}</div>
                        <div>{m.message}</div>
                      </div>

                      <div className="resim"></div>
                    </div>
                  )
                )
              : ""}
          </div>
          <div className="dm-input">
            <div className="dhcp">
              <input
                type="file"
                className="custom-file-input"
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></input>
            <button onClick={submit}>
              <img src={send} />
            </button>
          </div>
        </div>

        {dispNew == "show" ? (
          <div className="display-new">
            <div>New Messsage</div>
            <hr></hr>
            <div className="dn-input-bar">
              <div> To :</div>
              <input
                type="text"
                value={inputuname}
                onChange={(e) => setInputuname(e.target.value)}
              ></input>
            </div>
            <hr></hr>
            <div>Users</div>
            <div className="dm-list-user-list">
              {data6 && data6.searchusers
                ? data6.searchusers.map((m) => (
                    <ProfileBoxA
                      data={m}
                      changeRec={(rec) => setRecipient(rec)}
                    />
                  ))
                : ""}
            </div>
          </div>
        ) : (
          ""
        )}

        {dispNew == "show" ? (
          <div className="back-fading" onClick={toggle}></div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}

export default DMPage;
