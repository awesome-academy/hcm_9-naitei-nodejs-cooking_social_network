import React from "react";
import { UserCheck } from "lucide-react";
import {
  FaUser,
  FaUtensils,
  FaBookmark,
} from "react-icons/fa";

interface ProfileSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userData: any;
  userStats: any;
  isOwnProfile: boolean;
  user: any;
  stats: any;
  isFollowing: boolean;
  onToggleFollow: () => void;
  onEditProfile: (formData: any) => void;
}

export default function ProfileSidebar({
  activeTab,
  onTabChange,
  userData,
  userStats,
  isOwnProfile,
  user,
  stats,
  isFollowing,
  onToggleFollow,
  onEditProfile,
}: ProfileSidebarProps) {
  const tabs = [
    {
      id: "posts",
      label: "Bài viết",
      icon: <FaUser className="w-5 h-5" />,
      count: stats?.posts?.count || 0,
    },
    {
      id: "recipes",
      label: "Công thức",
      icon: <FaUtensils className="w-5 h-5" />,
      count: stats?.recipes?.count || 0,
    },
  ];

  if (isOwnProfile) {
    tabs.push({
      id: "saved",
      label: "Đã lưu",
      icon: <FaBookmark className="w-5 h-5" />,
      count: stats?.saved?.count || 0,
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">NỘI DUNG</h2>
      </div>

      <div className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
              activeTab === tab.id
                ? "bg-amber-50 text-amber-700 border border-amber-200"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-3">
              <span
                className={
                  activeTab === tab.id ? "text-amber-600" : "text-gray-500"
                }
              >
                {tab.icon}
              </span>
              <span className="font-medium">{tab.label}</span>
            </div>
            <span
              className={`text-sm px-2 py-1 rounded-full border ${
                activeTab === tab.id
                  ? "bg-amber-50 text-amber-700 border-amber-200"
                  : "bg-white text-gray-600 border-gray-200"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {!isOwnProfile && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <button
            onClick={onToggleFollow}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border transition-colors ${
              isFollowing
                ? "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                : "bg-amber-500 text-white border-amber-500 hover:bg-amber-600"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span className="font-medium">
              {isFollowing ? "Đang theo dõi" : "Theo dõi"}
            </span>
          </button>
        </div>
      )}

      {userData?.bio && (
        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-amber-500">✨</span>
            Giới thiệu
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {userData.bio}
          </p>
        </div>
      )}
    </div>
  );
}
