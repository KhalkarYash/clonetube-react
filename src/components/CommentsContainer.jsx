const CommentsContainer = () => {
  const commentsData = [
    {
      name: "James Doe",
      comment: "This is a comment from James Doe",
      replies: [],
    },
    {
      name: "James Doe",
      comment: "This is a comment from James Doe",
      replies: [
        {
          name: "James Doe",
          comment: "This is a comment from James Doe",
          replies: [],
        },
        {
          name: "James Doe",
          comment: "This is a comment from James Doe",
          replies: [
            {
              name: "James Doe",
              comment: "This is a comment from James Doe",
              replies: [
                {
                  name: "James Doe",
                  comment: "This is a comment from James Doe",
                  replies: [
                    {
                      name: "James Doe",
                      comment: "This is a comment from James Doe",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "James Doe",
      comment: "This is a comment from James Doe",
      replies: [
        {
          name: "James Doe",
          comment: "This is a comment from James Doe",
          replies: [],
        },
        {
          name: "James Doe",
          comment: "This is a comment from James Doe",
          replies: [],
        },
      ],
    },
    {
      name: "James Doe",
      comment: "This is a comment from James Doe",
      replies: [
        {
          name: "James Doe",
          comment: "This is a comment from James Doe",
          replies: [],
        },
      ],
    },
    {
      name: "James Doe",
      comment: "This is a comment from James Doe",
      replies: [],
    },
  ];

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 ml-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  const Comment = ({ data }) => {
    const { name, comment, replies } = data;
    return (
      <div className="flex p-2">
        <div className="p-2 mt-0 h-14 w-14">
          <img
            className="rounded-full"
            src="https://robohash.org/mail@ashallendesign.co.uk"
          />
        </div>
        <div className="p-1">
          <p className="text-md font-bold">@{name}</p>
          <p className="text-sm">{comment}</p>
          {
            // replies.length > 0 && <Comment data={replies} />
          }
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[rgba(255,255,255,0.03)] rounded-lg m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
