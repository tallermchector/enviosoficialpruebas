import os
import json
import re

def parse_md_content(content):
    """
    Parses the markdown content with bold keys and list items into a dictionary.
    """
    data = {}
    lines = [line for line in content.strip().split('\n') if line.strip()]
    
    current_key = None
    current_content = []

    # First line is the main title
    title_match = re.match(r'\*\*(?:Servicio|Service):\s*(.+?)\*\*', lines[0])
    if title_match:
        data['service'] = title_match.group(1).strip()
        lines = lines[1:]

    for line in lines:
        key_match = re.match(r'\*\*(.+?):\*\*', line)
        if key_match:
            # If we were processing a key, save its content
            if current_key:
                data[current_key] = "\n".join(current_content).strip()
            
            # Start new key
            current_key = key_match.group(1).strip()
            current_content = [line[len(key_match.group(0)):].strip()]
        elif current_key:
            # Handle list items
            if line.strip().startswith('* '):
                current_content.append(line.strip().lstrip('* '))
            else:
                current_content.append(line.strip())

    # Save the last processed key
    if current_key:
        data[current_key] = "\n".join(current_content).strip()

    return data

def main():
    """
    Main function to convert markdown files from src/context to JSON
    and save them in src/context/json.
    """
    input_dir = 'src/context'
    output_dir = 'src/context/json'

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created directory: {output_dir}")

    for filename in os.listdir(input_dir):
        if filename.endswith('.md'):
            md_path = os.path.join(input_dir, filename)
            json_filename = filename.replace('.md', '.json')
            json_path = os.path.join(output_dir, json_filename)

            print(f"Processing {md_path} -> {json_path}")

            with open(md_path, 'r', encoding='utf-8') as f:
                md_content = f.read()

            json_data = parse_md_content(md_content)

            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(json_data, f, ensure_ascii=False, indent=2)

    print("\nConversion complete!")

if __name__ == '__main__':
    main()
