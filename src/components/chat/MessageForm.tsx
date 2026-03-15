type MessageFormProps = {
  message: string;
  isSending: boolean;
  setMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
};

function MessageForm({ message, isSending, setMessage, handleSendMessage }: MessageFormProps) {
  return (
    <form className="chat__form" onSubmit={handleSendMessage}>
      <div className="chat__form-inner">
        <input
          type="text"
          className="chat__form-input"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="chat__form-button" disabled={isSending || message.length === 0}>
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
