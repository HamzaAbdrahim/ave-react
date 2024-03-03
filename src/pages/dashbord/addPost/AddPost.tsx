import user_img  from '../../../assets/Image-60.png';

const AddPost = () => {
    return (
      <div className="user-input-post w-100">
        <img src={user_img} className="user-post-img d-none d-lg-block" alt="" />
        <input
          type="text"
          className="post-input"
          placeholder="De quoi avez-vous besoin aujourd'hui, Aya H. ?"
        />
      </div>
    );
  };
  
  export default AddPost;
  