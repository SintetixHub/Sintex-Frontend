/* eslint-disable react/prop-types */
export default function EditProfileButton({ setEditing }) {
  return (
    <button
      className="text-sky-600 dark:text-orange-400 hover:text-sky-400 dark:hover:text-orange-300 absolute top-2 right-6 font-bold  uppercase"
      onClick={setEditing}
    >
      Editar perfil
    </button>
  );
}
