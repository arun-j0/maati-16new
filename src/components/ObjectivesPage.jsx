import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-decoration: underline;
`;

const List = styled.ul`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const ObjectivesPage = () => {
  return (
    <Container>
      <Title>The Objectives of Our Trust</Title>
      <List>
        <ListItem>Education and Skill Development: Our Trust NGO prioritizes and takes initiatives for the education and skill development of needy children. In order to enhance literacy, we provide books and stationery items to disadvantaged children. We also help them to pay their school fees. We shall establish schools, libraries, and vocational training centers, and conduct scholarship programs to empower individuals through education and equip them with the skills needed to succeed in life.</ListItem>
        <ListItem>Healthcare and Sanitation: Our Trust NGO often works to facilitate access to healthcare services and sanitation facilities, especially in underdeveloped and remote areas. In order to improve public health we shall establish health clinics, organize medical camps, and promote hygiene and sanitation practices.</ListItem>
        <ListItem>Environmental Conservation: Our Trust NGO will focus on environmental conservation and sustainability. We shall work to protect natural habitats, promote sustainable development practices, and raise awareness on environmental issues such as climate change, pollution, and biodiversity loss.</ListItem>
        <ListItem>Human Rights: Our Trust NGO shall work to promote and protect human rights, including civil, political, economic, social, and cultural rights. We shall advocate for the rights of specific groups such as women, children, minorities, refugees, and indigenous people.</ListItem>
        <ListItem>Social Welfare: Our Trust NGOs aim to improve the welfare and well-being of underprivileged and marginalized communities. This should include providing education, healthcare, nutrition, housing, and other basic needs to those in need.</ListItem>
        <ListItem>Community Development: Our Trust NGO shall engage in community development projects aimed at empowering communities to become self-reliant and sustainable. This should include initiatives such as microfinance programs, entrepreneurship training, infrastructure development, and capacity-building workshops.</ListItem>
        <ListItem>Disaster Relief and Rehabilitation: Our Trust NGO plays a crucial role in disaster response and recovery efforts. We shall provide emergency relief supplies, shelter, medical assistance, psychosocial support as well as long-term rehabilitation and reconstruction assistance to disaster-affected communities.</ListItem>
        <ListItem>Empowerment of Women and Gender Equality: Our Trust NGO will focus on promoting gender equality and empowering women and girls. We shall work to eliminate discrimination and violence against women, increase women's access to education and economic opportunities, and promote women's participation in decision-making processes.</ListItem>
        <ListItem>Promotion of Animal Welfare: Our Trust NGO shall advocate for the protection and welfare of animals, including companion animals, wildlife, and livestock. We shall support animal shelters, conduct rescue operations, spaying and neutering programs, and run campaigns against animal cruelty and exploitation.</ListItem>
      </List>
    </Container>
  );
};

export default ObjectivesPage;

