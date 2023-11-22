import serviceDetailImg from "../../../Images/serviceDetailImg.png";
import serviceDetailImg2 from "../../../Images/serviceDetailImg2.png";
import assessment from "../../../Images/assessment.png";
import dusting from "../../../Images/dust.png";
import client from "../../../Images/client.png";
import vacuum from "../../../Images/vaccum.png";
import kitchen from "../../../Images/kitchen.png";
import toilet from "../../../Images/toilet.png";
import trash from "../../../Images/trash.png";
import bedroom from "../../../Images/bedroom.png";
import special from "../../../Images/special.png";
import qc from "../../../Images/quality-control.png";
import touching from "../../../Images/touching.png";
import schedule from "../../../Images/schedule.png";
import window from "../../../Images/window.png";
import floor from "../../../Images/floor.png";



export const DetailServices = [
    {
        "ResidentialCleaning": {
          "overview": "Residential cleaning is a thorough and systematic process aimed at maintaining a clean, healthy, and comfortable living environment within homes. This service encompasses a variety of tasks that target different areas and surfaces throughout the residence. Here's an overview of the typical residential cleaning process:",
          "steps": [
            {
              "title": "Assessment and Planning",
              "description": "Professional cleaners begin by assessing the scope of work and understanding specific client preferences and requirements. A customized cleaning plan is developed based on the size of the home, the number of rooms, and any specific areas that require special attention.",
              "img": assessment,
            },
            {
              "title": "Surface Dusting and Wiping",
              "description": 
                "Dusting surfaces, including furniture, shelves, and decorative items. Wiping down surfaces to remove dust, fingerprints, and smudges",
                "img": dusting,
            },
            {
              "title": "Vacuuming and Sweeping",
              "description":
                "Vacuuming carpets, rugs, and upholstery to remove dirt and allergens. Sweeping and/or mopping hard floors to eliminate dust and debris.",
                "img": vacuum,
            },
            {
              "title": "Kitchen Cleaning",
              "description":
                "Cleaning kitchen countertops, appliances, and sinks. Wiping down cabinet exteriors. Cleaning the interior of the microwave and other appliances as needed.",
                "img": kitchen,
            
            },
            {
              "title": "Bathroom Cleaning",
              "description": 
                "Cleaning and disinfecting bathroom surfaces, including sinks, countertops, and fixtures. Scrubbing and disinfecting toilets and showers. Cleaning mirrors",
                "img": toilet,
            },
            {
              "title": "Bedroom Cleaning",
              "description": 
                "Changing bed linens. Dusting and wiping down bedroom furniture. Vacuuming carpets or cleaning floors.",
                "img": bedroom,
            },
            {
              "title": "Trash Removal",
              "description": 
                "Emptying trash bins and replacing liners.",
                "img": trash,
            },
            {
              "title": "Specialized Cleaning (as needed)",
              "description":
                "Addressing specific cleaning needs, such as stain removal or cleaning interior windows.",
                "img": special,
            },
            {
              "title": "Quality Check",
              "description": 
                "A final inspection to ensure all areas have been properly cleaned and meet the client's expectations.",
                "img": qc,
            },
            {
              "title": "Client Feedback",
              "description": 
                "Gathering feedback from the client to ensure satisfaction and identify any areas that may need special attention in future cleanings.",
                "img": client,
              
            }
          ],
          "additionalInfo": "Residential cleaning services can be tailored to meet individual needs, whether it's a one-time deep clean, regular maintenance cleaning, or addressing specific areas of concern. Professional cleaning services often use eco-friendly products and equipment to create a healthy and environmentally conscious home environment."
        }
      },
      
    {
        "CommercialCleaning": {
            "id": "002",
          "overview": "Commercial cleaning involves a systematic and comprehensive process tailored to maintain a clean, safe, and organized environment within business and commercial spaces. Here's an overview of the typical commercial cleaning process:",
          "steps": [
            {
              "title": "Initial Assessment and Customization",
              "description": "Conducting an initial assessment of the commercial space to understand its layout, size, and specific cleaning requirements. Customizing a cleaning plan based on the nature of the business, high-traffic areas, and any specialized cleaning needs."
            },
            {
              "title": "High-Touch Surface Disinfection",
              "description": "Focusing on disinfecting high-touch surfaces such as doorknobs, light switches, elevator buttons, and shared equipment to minimize the spread of germs."
            },
            {
              "title": "Surface Dusting and Wiping",
              "description": "Dusting and wiping down surfaces in common areas, offices, and workstations. Cleaning and polishing furniture and fixtures."
            },
            {
              "title": "Floor Cleaning",
              "description": "Vacuuming carpets and mats, and mopping hard floors. Paying attention to entrance areas and high-traffic zones."
            },
            {
              "title": "Restroom Sanitization",
              "description": "Thorough cleaning and disinfection of restroom fixtures, surfaces, and floors. Refilling and restocking paper products and soap dispensers."
            },
            {
              "title": "Kitchen or Break Room Cleaning",
              "description": "Cleaning and sanitizing kitchen surfaces, including countertops, sinks, and appliances. Wiping down tables and chairs in break areas."
            },
            {
              "title": "Trash Removal and Recycling",
              "description": "Emptying trash bins and recycling containers. Disposing of waste in accordance with local regulations."
            },
            {
              "title": "Window and Glass Cleaning",
              "description": "Cleaning interior windows and glass surfaces to maintain a clear and professional appearance."
            },
            {
              "title": "Specialized Cleaning Services",
              "description": "Providing additional services as needed, such as carpet cleaning, upholstery cleaning, or floor polishing."
            },
            {
              "title": "Quality Control",
              "description": "Conducting regular inspections to ensure the quality and thoroughness of the cleaning process. Addressing any specific concerns or areas that may require additional attention."
            },
            {
              "title": "Flexible Scheduling",
              "description": "Offering flexible scheduling options to minimize disruption to business operations, including after-hours or weekend cleaning."
            }
          ]
        }
      }

]