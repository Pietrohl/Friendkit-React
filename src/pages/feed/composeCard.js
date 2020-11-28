import React, { useEffect, useState } from "react";
import {
  MoreVertical,
  Video,
  X,
  Search,
  MapPin,
  Link2,
  MoreHorizontal,
  Bell,
  Smile,
  ChevronDown,
  Globe,
  Lock,
  Plus,
  User,
  Users,
  Image,
  Camera,
  Tag,
  Edit2,
  ChevronRight,
} from "react-feather";
import emoji1 from "../../assets/img/icons/emoji/emoji-1.svg";
import activities from "../../data/api/activities/activity-autocpl.json";
import mood from "../../data/api/activities/mood/mood-autocpl.json";
import $ from "jquery";
import { VideoHelpModal, VideoModal } from "./modals/videos";
import { ShareModal } from "./modals/share";

function ComposeCard(props) {
  const [isActive, setIsActive] = useState(false);
  const [extended, setExtended] = useState(false);
  const [showFriends, setshowFriends] = useState(false);
  const [friends1, setFriends1] = useState(false);
  const [friends2, setFriends2] = useState(false);
  const { videoModel, setVideoModel } = props;

  // tag: 1 , Activity: 2, Feels: 3, Drinking: 4, Eating: 5,  Reading: 6, Watching: 7,  Travelling: 8,
  // Location: 9, Link: 10, Gif: 11
  const [autoComp, setAutoComp] = useState(0);

  const openModal = () => {
    console.log("open");
    setIsActive(true);
    props.setAppOverlay(true);
  };
  const closeModal = () => {
    console.log("close");
    setAutoComp(0);
    setshowFriends(false);
    setExtended(false);
    setIsActive(false);
    props.setAppOverlay(false);
  };

  // AUTOCOMPLETE NOT WORKING IN REACT
  function openActivitiesDrop() {
    var e = $.Event("keyup", { keyCode: 65, which: 65 });
    $("#activities-autocpl").focus();
    $("#activities-autocpl").attr("value", "");
    $("#activities-autocpl").triggerHandler(e);
  }

  useEffect(() => {
    function activitiesAutoComp() {
      $(".app-overlay").addClass("is-active");
      $(".is-new-content").addClass("is-highlighted"); //$('.compose-options').toggleClass('is-hidden');

      $(".is-suboption").addClass("is-hidden");
      $("#activities-suboption").removeClass("is-hidden"); //Open autocomplete dropdown

      openActivitiesDrop();
    }

    window.addEventListener("load", activitiesAutoComp);
    return window.removeEventListener("load", activitiesAutoComp);
  });

  return (
    <div
      id="compose-card"
      onFocus={openModal}
      className={`card is-new-content ${isActive ? "is-highlighted" : ""}`}
      style={{ overflow: "visible" }}
    >
      <div className="tabs-wrapper">
        <div className="tabs is-boxed is-fullwidth">
          <ul>
            <li className="is-active" onClick={openModal}>
              <a>
                <span className="icon is-small">
                  <Edit2 />
                </span>
                <span>Publish</span>
              </a>
            </li>
            <li onClick={openModal}>
              <a className="modal-trigger" data-modal="albums-help-modal">
                <span className="icon is-small">
                  <Image />
                </span>
                <span>Albums</span>
              </a>
            </li>
            <li onClick={() => setVideoModel(true)}>
              <a className="modal-trigger" data-modal="videos-help-modal">
                <span className="icon is-small">
                  <Video />
                </span>
                <span>Video</span>
              </a>
            </li>

            <li className="close-wrap">
              <span className="close-publish" onClick={() => closeModal()}>
                <X />
              </span>
            </li>
          </ul>
        </div>

        {/* /Modal Overlay */}

        <div className="tab-content">
          <div className="compose">
            <div className="compose-form">
              <img
                src="https://via.placeholder.com/300x300"
                data-demo-src="assets/img/avatars/jenna.png"
                alt=""
              />
              <div className="control">
                <textarea
                  id="publish"
                  className="textarea"
                  rows="3"
                  placeholder="Write something about you..."
                ></textarea>
              </div>
            </div>

            <div id="options-summary" className="options-summary"></div>

            {/* Tag Friend autocomplete */}

            <div
              id="tag-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 1 ? "" : "is-hidden"
              }`}
            >
              <div id="tag-list" className="tag-list"></div>
              <div className="control">
                <input
                  id="users-autocpl"
                  type="text"
                  className="input"
                  placeholder="Who are you with?"
                />
                <div className="icon">
                  <Search />
                </div>
                <div className="close-icon is-main">
                  <X />
                </div>
              </div>
            </div>

            {/* Activities autocomplete */}
            <div
              id="activities-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 2 ? "" : "is-hidden"
              }`}
            >
              <div
                id="activities-autocpl-wrapper"
                className="control has-margin"
              >
                <input
                  id="activities-autocpl"
                  type="text"
                  className="input"
                  placeholder="What are you doing right now?"
                />
                <div className="icon">
                  <Search />
                </div>
                <div className="close-icon is-main">
                  <X />
                </div>
              </div>

              {/* Status/Feels autocomplete */}
              <div
                id="mood-autocpl-wrapper"
                className={`is-autocomplete is-suboption ${
                  autoComp === 3 ? "" : "is-hidden"
                }`}
              >
                <div className="control has-margin">
                  <input
                    id="mood-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="How do you feel?"
                  />
                  <div className="input-block">Feels</div>
                  <datalist id="mood-autocpl">
                    {mood.map((mood) => (
                      <option>
                        <div className="eac-item">
                          <div className="tamplate-wrapper">
                            <div className="avatar-wrapper">
                              <img
                                className="autocomplete-avatar"
                                src={mood.pic}
                              />
                            </div>
                            <div className="entry-text">
                              "{mood.name}"
                              <br />
                              <span>{mood.desc}</span>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                        </div>
                      </option>
                    ))}
                  </datalist>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              {/* Drinking Auto  */}
              <div
                id="drinking-autocpl-wrapper"
                className={`is-autocomplete is-suboption ${
                  autoComp === 4 ? "" : "is-hidden"
                }`}
              >
                <div className="control has-margin">
                  <input
                    id="drinking-autocpl"
                    className="input is-subactivity"
                    placeholder="What are you drinking?"
                  />
                  <div className="input-block">Drinks</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              <div
                id="eating-autocpl-wrapper"
                className={`is-autocomplete is-suboption ${
                  autoComp === 5 ? "" : "is-hidden"
                }`}
              >
                <div className="control has-margin">
                  <input
                    id="eating-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you eating?"
                  />
                  <div className="input-block">Eats</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              <div
                id="reading-autocpl-wrapper"
                className={`is-autocomplete is-suboption ${
                  autoComp === 6 ? "" : "is-hidden"
                }`}
              >
                <div className="control has-margin">
                  <input
                    id="reading-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you reading?"
                  />
                  <div className="input-block">Reads</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              <div
                id="watching-autocpl-wrapper"
                className={`is-autocomplete is-suboption ${
                  autoComp === 7 ? "" : "is-hidden"
                }`}
              >
                <div className="control has-margin">
                  <input
                    id="watching-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you watching?"
                  />
                  <div className="input-block">Watches</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              <div
                id="travel-autocpl-wrapper"
                className={`is-autocomplete is-suboption ${
                  autoComp === 8 ? "" : "is-hidden"
                }`}
              >
                <div className="control has-margin">
                  <input
                    id="travel-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="Where are you going?"
                  />
                  <div className="input-block">Travels</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="location-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 9 ? "" : "is-hidden"
              }`}
            >
              <div
                id="location-autocpl-wrapper"
                className="control is-location-wrapper has-margin"
              >
                <input
                  id="location-autocpl"
                  type="text"
                  className="input"
                  placeholder="Where are you now?"
                />
                <div className="icon">
                  <MapPin />
                </div>
                <div className="close-icon is-main">
                  <X />
                </div>
              </div>
            </div>

            <div
              id="link-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 10 ? "" : "is-hidden"
              }`}
            >
              <div
                id="link-autocpl-wrapper"
                className="control is-location-wrapper has-margin"
              >
                <input
                  id="link-autocpl"
                  type="text"
                  className="input"
                  placeholder="Enter the link URL"
                />
                <div className="icon">
                  <Link2 />
                </div>
                <div className="close-icon is-main">
                  <X />
                </div>
              </div>
            </div>

            <div
              id="gif-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 11 ? "" : "is-hidden"
              }`}
            >
              <div
                id="gif-autocpl-wrapper"
                className="control is-gif-wrapper has-margin"
              >
                <input
                  id="gif-autocpl"
                  type="text"
                  className="input"
                  placeholder="Search a GIF to add"
                  autofocus
                />
                <div className="icon">
                  <Search />
                </div>
                <div className="close-icon is-main">
                  <X />
                </div>
                <div className="gif-dropdown">
                  <div className="inner">
                    <div className="gif-block">
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/1.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/2.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/3.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/4.gif"
                        alt=""
                      />
                    </div>
                    <div className="gif-block">
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/5.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/6.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/7.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/8.gif"
                        alt=""
                      />
                    </div>
                    <div className="gif-block">
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/9.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/10.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/11.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/12.gif"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="extended-options"
            className={`compose-options ${extended ? "" : "is-hidden"}`}
          >
            <div className="columns is-multiline is-full">
              <div className="column is-6 is-narrower">
                <div className="compose-option is-centered">
                  <Camera />
                  <span>Photo/Video</span>
                  <input type="file" />
                </div>
              </div>

              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(2)}
              >
                <div
                  id="extended-show-activities"
                  className="compose-option is-centered"
                >
                  <img src={emoji1} alt="" />
                  <span>Mood/Activity</span>
                </div>
              </div>

              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(1)}
              >
                <div
                  id="open-tag-suboption"
                  className="compose-option is-centered"
                >
                  <Tag />
                  <span>Tag friends</span>
                </div>
              </div>

              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(9)}
              >
                <div
                  id="open-location-suboption"
                  className="compose-option is-centered"
                >
                  <MapPin />
                  <span>Post location</span>
                </div>
              </div>

              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(10)}
              >
                <div
                  id="open-link-suboption"
                  className="compose-option is-centered"
                >
                  <Link2 />
                  <span>Share link</span>
                </div>
              </div>

              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(11)}
              >
                <div
                  id="open-gif-suboption"
                  className="compose-option is-centered"
                >
                  <Image />
                  <span>Post GIF</span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="basic-options"
            onClick={openModal}
            className={`compose-options ${!extended ? "" : "is-hidden"}`}
          >
            <div className="compose-option">
              <Camera />
              <span>Media</span>
              <input type="file" />
            </div>

            <div
              id="show-activities"
              className="compose-option"
              onClick={() => setAutoComp(2)}
            >
              <img src={emoji1} alt="" />
              <span>Activity</span>
            </div>

            <div
              id="open-extended-options"
              className="compose-option"
              onClick={setExtended}
            >
              <MoreHorizontal />
            </div>
          </div>

          <div className="hidden-options">
            <div className="target-channels">
              <label className="channel" htmlFor="checkbox-1">
                <div className="round-checkbox is-small">
                  <div>
                    <input type="checkbox" id="checkbox-1" />
                    <label htmlfor="checkbox-1"></label>
                  </div>
                </div>
                <div className="channel-icon">
                  <Bell />
                </div>
                <div className="channel-name">Activity Feed</div>

                <div
                  className={`dropdown is-spaced is-modern is-right is-neutral dropdown-trigger ${
                    friends1 ? "is-active" : ""
                  }`}
                  onBlur={() => setFriends1(false)}
                >
                  <div>
                    <button
                      className="button"
                      aria-haspopup="true"
                      onClick={() => setFriends1(true)}
                    >
                      <Smile className="main-icon" />
                      <span>Friends</span>
                      <ChevronDown className="caret" />
                    </button>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <Globe />
                          <div className="media-content">
                            <h3>Public</h3>
                            <small>Anyone can see this publication.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <Users />
                          <div className="media-content">
                            <h3>Friends</h3>
                            <small>
                              only friends can see this publication.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <User />
                          <div className="media-content">
                            <h3>Specific friends</h3>
                            <small>Don't show it to some friends.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a className="dropdown-item">
                        <div className="media">
                          <Lock />
                          <div className="media-content">
                            <h3>Only me</h3>
                            <small>Only me can see this publication.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </label>

              <label htmlFor="checkbox-2" className="channel">
                <div className="round-checkbox is-small">
                  <div>
                    <input type="checkbox" id="checkbox-2" />
                    <label htmlFor="checkbox-2"></label>
                  </div>
                </div>
                <div className="story-icon">
                  <div className="plus-icon">
                    <Plus />
                  </div>
                </div>

                <div className="channel-name">My Story</div>

                <div
                  className={`dropdown is-spaced is-modern is-right is-neutral dropdown-trigger ${
                    friends2 ? "is-active" : ""
                  }`}
                  onBlur={() => setFriends2(false)}
                >
                  <div>
                    <button
                      className="button"
                      aria-haspopup="true"
                      onClick={() => setFriends2(true)}
                    >
                      <Smile className="main-icon" />
                      <span>Friends</span>
                      <ChevronDown className="caret" />
                    </button>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <Globe />
                          <div className="media-content">
                            <h3>Public</h3>
                            <small>Anyone can see this publication.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <Users />
                          <div className="media-content">
                            <h3>Friends</h3>
                            <small>
                              only friends can see this publication.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <Users />
                          <div className="media-content">
                            <h3>Friends and contacts</h3>
                            <small>Your friends and contacts.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            <div className={`friends-list ${showFriends ? "" : "is-hidden"}`}>
              <div className="list-header">
                <span>Send in a message</span>
                <div className="actions">
                  <a
                    id="open-compose-search"
                    href="javascript:void(0);"
                    className="search-trigger"
                  >
                    <Search />
                  </a>

                  <div id="compose-search" className="control is-hidden">
                    <input
                      type="text"
                      className="input"
                      placeholder="Search People"
                    />
                    <span>
                      <Search />
                    </span>
                  </div>
                  <a
                    href="javascript:void(0);"
                    className="is-inverted modal-trigger"
                    data-modal="create-group-modal"
                  >
                    Create group
                  </a>
                </div>
              </div>

              <div className="list-body">
                <div className="friend-block">
                  <div className="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-3" />
                      <label htmlFor="checkbox-3"></label>
                    </div>
                  </div>
                  <img
                    className="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/dan.jpg"
                    alt=""
                  />
                  <div className="friend-name">Dan Walker</div>
                </div>

                <div className="friend-block">
                  <div className="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-4" />
                      <label htmlFor="checkbox-4"></label>
                    </div>
                  </div>
                  <img
                    className="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/daniel.jpg"
                    alt=""
                  />
                  <div className="friend-name">Daniel Wellington</div>
                </div>

                <div className="friend-block">
                  <div className="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-5" />
                      <label htmlFor="checkbox-5"></label>
                    </div>
                  </div>
                  <img
                    className="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/stella.jpg"
                    alt=""
                  />
                  <div className="friend-name">Stella Bergmann</div>
                </div>

                <div className="friend-block">
                  <div className="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-6" />
                      <label htmlFor="checkbox-6"></label>
                    </div>
                  </div>
                  <img
                    className="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/david.jpg"
                    alt=""
                  />
                  <div className="friend-name">David Kim</div>
                </div>

                <div className="friend-block">
                  <div className="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-7" />
                      <label htmlFor="checkbox-7"></label>
                    </div>
                  </div>
                  <img
                    className="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/nelly.png"
                    alt=""
                  />
                  <div className="friend-name">Nelly Schwartz</div>
                </div>
              </div>
            </div>
          </div>

          <div className="more-wrap">
            <button
              id="show-compose-friends"
              type="button"
              className="button is-more"
              aria-haspopup="true"
              onClick={() => setshowFriends(true)}
            >
              <MoreVertical />
              <span>View More</span>
            </button>

            <button
              id="publish-button"
              type="button"
              className="button is-solid accent-button is-fullwidth"
              onClick={() => closeModal()}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
      <VideoModal isActive={videoModel} setIsActive={setVideoModel} />
    </div>
  );
}
export default ComposeCard;
