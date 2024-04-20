import React from "react";
import useAdmin from "../hooks/useAdmin";

const AdminPage = () => {

    const { users } = useAdmin('/')
    
    return (
        <div className="loginusers flex gap-6 flex-wrap min-h-[90vh] w-full bg-black items-start justify-center text-center overflow-auto snap-none pt-[12vh]">
            {users.map(user => (
                <div key={user.username} className="card">
                    {!user.isAdmin && (
                        <div className="container h-[45vh] mb-3 w-[35vh] bg-slate-500 flex flex-col items-center justify-center rounded mt-4 ml-4">
                            <div className="card-body">
                                <h5 className="card-title text-white text-4xl text-extrabold ">
                                    hello👋{user.username}
                                </h5>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            {users.length < 1 && <p>No user Found</p>}
        </div>
    );
};

export default AdminPage;
