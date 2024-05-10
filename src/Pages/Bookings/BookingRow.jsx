const BookingRow = ({ book, handleDelete, handleConfirm }) => {
  const { _id, date, service, dueAmount, img, status } = book;
  console.log(date, service, dueAmount, img, status);

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button className="btn btn-circle btn-outline btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="size-24 rounded">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${dueAmount}</td>
      <th>
        {status === "confirmed" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => {
              handleConfirm(_id);
            }}
            className="btn btn-ghost btn-xs"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
