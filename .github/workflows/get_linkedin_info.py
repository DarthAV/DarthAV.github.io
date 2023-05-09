import os
import yaml
from linkedin import linkedin

access_token = os.environ.get('ACCESS_TOKEN')
file_path = os.environ.get('FILE_PATH')

application = linkedin.LinkedInApplication(token=access_token)

# Retrieve education information
profile = application.get_profile(selectors=['educations'])
educations = profile['educations']['values']
education_data = []
for education in educations:
    education_data.append({
        'school_name': education.get('schoolName', ''),
        'degree': education.get('degree', ''),
        'field_of_study': education.get('fieldOfStudy', ''),
        'start_date': education.get('startDate', {}).get('year', ''),
        'end_date': education.get('endDate', {}).get('year', '')
    })

# Retrieve experience information
positions = application.get_profile(selectors=['positions'])['positions']['values']
experience_data = []
for position in positions:
    experience_data.append({
        'company_name': position.get('company', {}).get('name', ''),
        'title': position.get('title', ''),
        'start_date': position.get('startDate', {}).get('year', ''),
        'end_date': position.get('endDate', {}).get('year', ''),
        'description': position.get('description', '')
    })

# Retrieve skills information
skills = application.get_profile(selectors=['skills'])['skills']['values']
skill_names = [skill['skill']['name'] for skill in skills]

# Combine all information into a dictionary
data = {
    'education': education_data,
    'experience': experience_data,
    'skills': skill_names
}

# Save data to YAML file
with open(file_path, 'w') as f:
    yaml.dump(data, f)
