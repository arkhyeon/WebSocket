import styled from '@emotion/styled';

function MessageBox({ chat, isMine }) {
  console.log(chat);
  return (
    <ChatWrap className={isMine ? 'chat-mine' : 'chat-other'}>
      <span>
        <b>{chat.userId}</b>[ {chat.date} ]
      </span>
      <Chat>{chat.message}</Chat>
    </ChatWrap>
  );
}

const ChatWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top:12px;
  gap:5px;
  & span{
    font-size:13px;
    color:white;
  }
  
  &.chat-mine {
    align-items: flex-end;
  }
`;

const Chat = styled.div`
  width: fit-content;
  min-width: 30px;
  max-width: 300px;
  background-color: #fef102;
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 7px;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 18px;

  &:before{
    border: 6px solid transparent;
    content: '';
    position: absolute;
    top: 8px;
  }
  .chat-other &:before {
    border-right-color: #fef102;
    left: -11px;
  }
  .chat-mine &:before {
    border-left-color: #fef102;
    right: -11px;
  }
`;

export default MessageBox;
