-- Users table seeds here (Example)
INSERT INTO users (name,email,password,role,avatar_url) 
VALUES ('Shivani','shivani1406sharma@gmail.com','hello','owner','express-back-end\public\avatars\images\avataaars1.png');
VALUES ('Priyanka','priyanka.datti@gmail.com','hello','owner','express-back-end\public\avatars\images\avataaars2.png');
VALUES ('Najma','najmaduale1@gmail.com','hello','owner','express-back-end\public\avatars\images\avataaars3.png');
VALUES ('Harry','harry1@gmail.com','hello','guest','express-back-end\public\avatars\images\avataaars4.png');


INSERT INTO properties (owner_id,name,description,image,property_type,check_in_time,
  check_out_time,price_per_night,room_size,meal_plan,pampering_session,vet_visit,
  daily_hairbrushing,for_cat, for_dog)
  VALUES (1, 'Pet Oasis', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'express-back-end\public\pets\deluxe-room.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true); 
  VALUES (2, 'Lovely Pet Station', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'express-back-end\public\pets\family-suite.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true); 
  VALUES (1, 'Pet Boarding', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'express-back-end\public\pets\junior-suite.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true); 

INSERT INTO images (property_id, image_url)
VALUES (1, 'express-back-end\public\pets\boarding-1.jpg')
VALUES (1, 'express-back-end\public\pets\boarding-2.jpg')
VALUES (1, 'express-back-end\public\pets\boarding-3.jpg')
VALUES (2, 'express-back-end\public\pets\boarding-4.jpg')
VALUES (2, 'express-back-end\public\pets\boarding-6.jpg')
VALUES (3, 'express-back-end\public\pets\day-care-1.jpg')
VALUES (3, 'express-back-end\public\pets\day-care-2.jpg')
VALUES (3, 'express-back-end\public\pets\day-care-banner-1.jpg')

INSERT INTO reservations (property_id, user_id)
VALUES (1, 4);