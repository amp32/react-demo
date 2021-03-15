import ContactCard from'./ContactCard';

function App() {
  return (
    <div className="contacts">
            <ContactCard 
                contact={["Mr. Whiskerson", "http://placekitten.com/300/200", "(212) 555-1234", "mr.whiskaz@catnap.meow"]}
            />
            
            <ContactCard 
                contact={["Fluffykins", "http://placekitten.com/400/200", "(212) 555-2345", "fluff@me.com"]}
            />
            
            <ContactCard
                contact={["Destroyer", "http://placekitten.com/400/300", "(212) 555-3456", "ofworlds@yahoo.com"]}
            />
            
            <ContactCard 
                contact={["Felix", "http://placekitten.com/200/100", "(212) 555-4567", "thecat@hotmail.com"]}
            />
    </div>
  );
}

export default App;
