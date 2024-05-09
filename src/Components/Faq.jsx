import React from 'react'
import "./Faq.css"

const Faq = () => {
    let acc = document.getElementsByClassName("accordion");
        let i;
  
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");
  
            let pannel = this.nextElementSibling;
  
            if (pannel.style.display === "block") {
              pannel.style.display = "none";
            } else {
              pannel.style.display = "block";
            }
          });
        }
  return (
    <>
     <div className="wrapper">
        <p><i>"Green Haven Queries: Your Ultimate Plant Nursery Q&A Destination"</i></p>
        <h1 style={{fontSize:"xxx-large"}}>Frequently Asked Questions</h1>
  
        <div className="faq">
          <button className="accordion">
            What are some natural remedies for common plant pests and diseases?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
                Natural remedies for common plant pests and diseases often involve non-toxic solutions that are safe for both the plants and the environment. One effective method is using insecticidal soaps or neem oil to control aphids, mites, and other soft-bodied insects. Additionally, introducing beneficial insects like ladybugs or predatory mites can help keep pest populations in check. For fungal diseases like powdery mildew or black spot, a mixture of baking soda and water can act as a preventive spray. Proper plant hygiene, such as removing and disposing of infected plant parts, also plays a crucial role in disease management. Finally, promoting overall plant health through proper watering, adequate sunlight, and nutrient-rich soil can increase plant resilience against pests and diseases.
            </p>
          </div>
        </div>
  
        <div className="faq">
          <button className="accordion">
            Do you offer landscaping services for residential gardens?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
                Absolutely! Our plant nursery not only provides a wide range of beautiful and healthy plants but also offers comprehensive landscaping services tailored to your residential garden needs. Our experienced team of landscaping professionals takes pride in transforming outdoor spaces into stunning and functional landscapes that reflect your personal style and preferences. Whether you're looking to create a serene oasis for relaxation, a vibrant floral garden to attract pollinators, or a sustainable landscape with native plants, we have the expertise to bring your vision to life. From initial consultation to design, installation, and maintenance, we are committed to delivering exceptional results that enhance the beauty and value of your home. Let us help you turn your garden dreams into reality!
            </p>
          </div>
        </div>
  
        <div className="faq">
          <button className="accordion">
            Can you recommend drought-resistant plants for my garden?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
                Certainly! Drought-resistant plants are an excellent choice for gardens in regions with limited water availability or for gardeners looking to conserve water. Some popular options include succulents such as aloe vera, agave, and jade plants, which store water in their leaves and stems. Additionally, ornamental grasses like fountain grass and blue fescue are known for their ability to thrive in dry conditions while adding texture and movement to the landscape. Lavender, rosemary, and sage are aromatic herbs that not only tolerate drought but also attract pollinators with their fragrant flowers. For colorful blooms, consider drought-tolerant perennials like blanket flower (Gaillardia) and yarrow, which add vibrant hues to the garden while requiring minimal watering once established. These plants not only offer beauty but also resilience in challenging environmental conditions, making them ideal choices for water-wise gardening.
            </p>
          </div>
        </div>
  
        <div className="faq">
          <button className="accordion">
            How do I care for succulents during the winter months?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
                During the winter months, caring for succulents involves a few adjustments to accommodate their needs in cooler temperatures. Firstly, it's crucial to place them in well-lit areas, preferably near south or east-facing windows where they can receive ample sunlight. Since succulents are sensitive to overwatering, it's essential to water them sparingly during this time, allowing the soil to dry out completely between waterings. Additionally, protect them from cold drafts by keeping them away from drafty windows or doors. If the indoor air becomes too dry due to heating systems, consider using a humidifier or placing a tray of water with pebbles beneath the plants to increase humidity. Finally, refrain from fertilizing succulents during the winter months, as they enter a period of dormancy and don't require additional nutrients. With proper care, your succulents can thrive through the winter season.
            </p>
          </div>
        </div>
  
        <div className="faq">
          <button className="accordion">
            What types of plants are best suited for indoor spaces?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
                When it comes to indoor plants, there's a plethora of options to choose from, each with its own unique charm and benefits. Some of the best-suited plants for indoor spaces include low-light tolerant letieties like pothos, snake plants, and peace lilies, which thrive in areas with limited natural sunlight. Succulents and cacti are excellent choices for those who prefer low-maintenance options, as they require infrequent watering and can withstand dry indoor conditions. For adding a splash of color and freshness to indoor environments, flowering plants such as orchids, African violets, and begonias are popular choices. Additionally, herbs like basil, mint, and parsley can be grown indoors, providing both culinary delights and aromatic benefits. When selecting indoor plants, it's essential to consider factors like light levels, humidity, and space availability to ensure their health and vitality in your home or office environment.
            </p>
          </div>
        </div>
  
        <div className="faq">
          <button className="accordion">
            Which plants are safe for pets and won't harm them if ingested?
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
                When it comes to selecting plants that are safe for pets, it's essential to prioritize their well-being. Opt for pet-friendly options like spider plants, Boston ferns, and African violets, which are non-toxic to cats and dogs. For those with a penchant for greenery, consider adding herbs like basil, mint, and parsley to your indoor garden, as they not only add flavor to your dishes but are also safe for furry companions. Succulents such as echeverias and hens-and-chicks are another excellent choice, offering aesthetic appeal without posing a threat to pets if nibbled on. Remember to research specific plant letieties and consult with your veterinarian if you're unsure about a particular plant's safety for your pets.
            </p>
          </div>
        </div>
      </div>
  
    </>
  )
}

export default Faq;