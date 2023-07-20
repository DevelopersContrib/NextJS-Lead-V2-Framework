import Image from 'next/image';
import { FaMapLocationDot } from "react-icons/fa6";
const UserWidget = ({ users }) => {
    return(
        <>
        <div className="col-xl-4">
            <div className="card text-bg-light mb-3">
                <div className="card-header">Latest Contributors</div>
                <div className="card-body tw-overflow-y-auto tw-max-h-[300px]">
                    <ul className="list-unstyled">
                        {users.data.map((user) => (
                            <li key={user.Username}>
                                <div className="d-flex mb-3">
                                    <div className="flex-shrink-0">
                                        <Image
                                        src="https://www.contrib.com/img/avatar0.jpg"
                                        width={40}
                                        height={40}
                                        alt=""
                                        className="tw-object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <ul className="list-inline mb-1">
                                        <li className="list-inline-item">
                                            <div className="tw-inline-flex tw-bg-blue-500 tw-rounded-3xl tw-py-1 tw-px-4 tw-capitalize tw-text-xs tw-text-white">
                                                {user.FirstName}
                                            </div>
                                        </li>
                                        </ul>
                                        <p className="tw-text-xs mb-0">
                                            <FaMapLocationDot className="tw-mr-2 tw-text-gray-400" />
                                            {user.country}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                   
                </div>
            </div>
        </div>
        </>
    )
}
export default UserWidget;